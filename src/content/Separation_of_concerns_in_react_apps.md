---
title: 'Separation of concerns in modern React apps - key principles and examples'
date: 2021-02-22
description: 'Building React apps, ever wondered where to put that "thing", and how to name it?'
author: 'Rafał Świętek'
authorAvatar: ./assets/avatar_rafal_swietek.png
metaImage: ./assets/Separation_of_concerns_in_react_apps/meta_image.jpg
isFeature: false
---

A few years ago, when React started becoming popular, one of the things that made developers love it was its flexibility in implementation. Everyone pointed out that it’s not a framework, but a library and anyone can implement it as one likes.

Well, that hasn’t changed yet, but React mutated so much that if you take a look at the app’s code written using their technology in 2016 and compare it to what we write today, you would probably think that these are 2 completely different things.

In 2019, hooks were introduced and that significantly changed the way we create and structure our components and logic. Hooks began to gradually push class components out and it feels like we finally have a clean and dedicated solution for separating logic from the visual layer.

## Structuring components and logic before hooks

Let’s not spend too much time talking about the past. Shortly, the most popular solution for separating the view from logic, that I’ve seen in React apps before hooks, was using class components called Containers that contained the whole logic and wrapping other components that would contain just the view.

That solution had at least two very important disadvantages. First, it was sometimes difficult to reuse those containers, and second, we usually had to use some external state management libraries anyway to share the state between different parts of the application.

## Back-end experience much appreciated

There’s a general opinion suggesting that people who want to learn some web development should start from the front-end because it’s “easier” (whatever that means). I tend to disagree with that. Modern technologies meant that more and more logic can actually appear on the front-end. There are arguments for and against but it’s already happening, whether you like it or not, and front-end developers need to get to know how to deal with handling that logic.

## A general idea behind a good separation of concerns

Imagine you want to buy a Snickers from the vending machine. You put some coins inside, you tap on the “SNICKERS” button, and voila! Your favorite chocolate bar is now waiting for you to take the first bite.

Now, I know that might sound like we’re moving a little bit off the main topic but we’re getting somewhere, I promise.

You just bought something from the vending machine, you just used the vending machine, but you don’t really care about how the vending machine works, do you?

The whole process that the machine had to go through to give you the item is completely out of **context** when you just wanted to get that delicious snack.

You don’t want to know that the machine had to count the money you put inside, push a product from shelf #12, then move the product to the distribution pocket, and, as a side effect, print out a receipt.

The vending machine probably also doesn’t care about the fact that you’d like to eat a Snickers. It doesn’t need to know that the button you pushed had a “SNICKERS” logo on it. For that machine, it’s just a product laying on shelf #12.

![vending machine](./assets/Separation_of_concerns_in_react_apps/vending_machine.jpg)

In this example, you’re just like a React component trying to use a custom hook (the vending machine). I think you already know what I’m trying to say. From here, the more interesting part starts.

## Practical examples

Let’s say we’re developing an e-commerce app and we’re currently working on the product page. First, we want to display some details about the product. Here’s how we could do that without any custom hook.

```jsx
const ProductPage = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [selectedVariantId, setSelectedVariantId] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://api.example.com/products/${productId}`);
      setProduct(res.json());
    };
    fetchProduct();
  }, []);

  const onSubmit = () => {
    // ...
  };

  if (!product) return null;

  return (
    <Container>
      <Name>{product.name}</Name>
      <Price>{product.discountPrice || product.price}</Price>

      {
        product.discountPrice
        && product.price - product.discountPrice > 100
        && <SuperSaleBadge />
      }

      <Description>{product.description}</Description>
      <VariantSwitch
        variants={product.variants}
        value={selectedVariantId}
        onClick={setSelectedVariantId}
      />
      <Button onClick={onSubmit}>Add to cart</Button>
    </Container>
  );
};
```

Besides the fact that the logic is mixed with the view layer, there are already a few naming issues that we’re gonna fix right now.

## Choosing components' props names

First, the name of a function that we pass to the `onClick` prop of the `<Button />` component - `onSubmit`.

I’ve seen this kind of problem many times. It could also be called `onClick` (just like the prop name) or sometimes `onClickHandler`. These are all wrong names. Just as it’s good for the name of a component’s prop, as bad for a name of a function.

You could ask, why is it ok to be a name of the `<Button />` prop, and not of a function that we pass over that prop? Well, mainly because the name of the prop was made in a completely different context - the Button’s context.

See, the `<Button />` is a general and reusable component. Obviously, it shouldn’t know what kind of operation we want to execute when someone clicks it. From the inside of the component, it’s clear that the `onClick` prop is a handler that we want to run after someone clicks on the button. From the outside of the component, it’s also pretty clear. A button is something that users can click. It makes perfect sense that whatever we pass to that prop is going to be executed on the click event.

On the other hand, we have the context where we actually use the `<Button />` component. Reading the code, we would like to know what is going to happen when someone clicks it. That `onSubmit` function name tells us nothing. We could name it `foo` instead and that would have the same effect.

That `onSubmit` function should be named `addToCart` to tell what it actually does.

## Choosing names for handlers

Second, names of `<VariantSwitch />` component’s props - `value` and `onClick`.

Compared to the `<Button />` component, `<VariantSwitch />` is not that general. By its name, we can tell that it’s some custom component allowing it to switch between product variants. It’s been designed in a way that we could imagine using the same component for something else. It’s strictly tied to the variant’s context.

Let’s start with the `value` prop name. Ok, it’s not that bad, but I think it could be even better. Once we start using a component named `<VariantSwitch />` we could probably figure out that its `value` prop should receive some information about the currently selected variant. But don’t you agree that `selectedVariantId` would be much clearer?

Now, when it comes to the `onClick` prop. We just said that it’s an ok prop name for the `<Button />` component. Why isn’t it ok for the `<VariantSwitch />`, right? We just agreed that this component is bound to some context, and that context isn’t about clicking or buttons. It’s about switching between variants.

This component is here to add a layer of abstraction over its actual implementation. We shouldn’t know or care about how this switch actually handles switching between variants. In the future, someone may change the way that variant switch works, and instead of clicking on some buttons, now users need to swipe or scroll. Should we now change its `onClick` prop name to `onScroll` and refactor every component where we use that switch?

Instead, that prop could be named e.g. `onVariantSelection`. This way we leave all the implementation details to the `<VariantSwitch />` component itself. All we care about is that it will trigger a function from that prop whenever someone selects a variant. Sounds reasonable, right?

```jsx
const ProductPage = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [selectedVariantId, setSelectedVariantId] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://api.example.com/products/${productId}`);
      setProduct(res.json());
    };
    fetchProduct();
  }, []);

  const addToCart = () => {
    // ...
  };

  if (!product) return null;

  return (
    <Container>
      <Name>{product.name}</Name>
      <Price>{product.discountPrice || product.price}</Price>

      {
        product.discountPrice
        && product.price - product.discountPrice > 100
        && <SuperSaleBadge />
      }

      <Description>{product.description}</Description>
      <VariantSwitch
        variants={product.variants}
        selectedVariantId={selectedVariantId}
        onVariantSelection={setSelectedVariantId}
      />
      <Button onClick={addToCart}>Add to cart</Button>
    </Container>
  );
};
```

That’s better! Now we can take care of that ugly API request fetching product details.

## First architecture improvements

We should move it out of our `<ProductPage />` component to start separating logic that is connected with using a single product. It will help us with further development and app maintenance because we won’t need to untangle logic from the view, plus we will be able to find everything connected with the same context in a single place. Also, it will help us stay DRY when we’ll need to refer to a single product in a different place in the code.

The way I prefer is to create a custom hook that would become a layer of abstraction over the logic I want to separate. What name should the hook have? The key is always the context. We’d like to create a hook that handles everything connected within the context of a single product. It makes sense to just name it `useSingleProduct`:

```jsx
const useSingleProduct = (productId) => {
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    const res = await fetch(`https://api.example.com/products/${productId}`);
    setProduct(res.json());
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return product;
};

const ProductPage = ({ productId }) => {
  const [selectedVariantId, setSelectedVariantId] = useState(0);
  const product = useSingleProduct(productId);

  const addToCart = () => {
    // ...
  };

  if (!product) return null;

  return (
    <Container>
      <Name>{product.name}</Name>
      <Price>{product.discountPrice || product.price}</Price>

      {
        product.discountPrice
        && product.price - product.discountPrice > 100
        && <SuperSaleBadge />
      }

      <Description>{product.description}</Description>
      <VariantSwitch
        variants={product.variants}
        selectedVariantId={selectedVariantId}
        onVariantSelection={setSelectedVariantId}
      />
      <Button onClick={addToCart}>Add to cart</Button>
    </Container>
  );
};
```

Perfect! Finally, we have a separate place for some single product related logic. Let’s see if there is anything else we could move to that hook.

## Move the business logic out of your components

Take a look at the JSX code from the example above. Especially two segments: displaying the price and the “super sale” badge.

If you notice some comparisons or more complicated conditions mixed with the JSX code, that’s usually a sign it could be abstracted away. Why should your view template know which price of the product is the active one? Why should your view template know what conditions the product needs to meet to be considered as one on “super sale”?

Both price, and “super sale” badge will probably show up on the product list too. Does it mean we should have this kind of logic in two separate places? Instead, we could move this code into the place where it belongs - the `useSingleProduct` hook.

Whenever the conditions for displaying the “super sale” badge changes, we can refactor just the hook and be sure that we covered all cases. The view is responsible just for displaying (or not) the data. Only the hook knows what data is correct.

In the case of the “super sale” badge, for some of us, it might be tempting to export from the hook a parameter named e.g. `shouldDisplaySuperSaleBadge`, or something similar. Remember that we want to achieve a complete separation between the hook and the component. They should not know anything about themselves and they should not know how they are going to be used. A better name for that parameter would be `isOnSuperSale`. This way the hook stays more universal. See how the refactoring might look like through the example below:

```jsx
const useSingleProduct = (productId) => {
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    const res = await fetch(`https://api.example.com/products/${productId}`);
    setProduct(res.json());
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const currentPrice = useMemo(() => product?.discountPrice || product?.price, [product]);

  const isOnSuperSale = useMemo(() => product?.discountPrice && product?.price - product.discountPrice > 100, [product]);

  return {
    product,
    currentPrice,
    isOnSuperSale,
  };
};

const ProductPage = ({ productId }) => {
  const [selectedVariantId, setSelectedVariantId] = useState(0);
  const {
    product,
    currentPrice,
    isOnSuperSale,
  } = useSingleProduct(productId);

  const addToCart = () => {
    // ...
  };

  if (!product) return null;

  return (
    <Container>
      <Name>{product.name}</Name>
      <Price>{currentPrice}</Price>

      {isOnSuperSale && <SuperSaleBadge />}

      <Description>{product.description}</Description>
      <VariantSwitch
        variants={product.variants}
        selectedVariantId={selectedVariantId}
        onVariantSelection={setSelectedVariantId}
      />
      <Button onClick={addToCart}>Add to cart</Button>
    </Container>
  );
};
```

Great! There’s one more thing we could do with this example to make it even better. The `addToCart` function - it definitely should go to the `useCart` hook, right?

```jsx
const useSingleProduct = (productId) => {
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    const res = await fetch(`https://api.example.com/products/${productId}`);
    setProduct(res.json());
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const currentPrice = useMemo(() => product?.discountPrice || product?.price, [product]);

  const isOnSuperSale = useMemo(() => product?.discountPrice && product?.price - product.discountPrice > 100, [product]);

  return {
    product,
    currentPrice,
    isOnSuperSale,
  };
};

const ProductPage = ({ productId }) => {
  const [selectedVariantId, setSelectedVariantId] = useState(0);
  const {
    product,
    currentPrice,
    isOnSuperSale,
  } = useSingleProduct(productId);

  const { add: addToCart } = useCart();

  if (!product) return null;

  return (
    <Container>
      <Name>{product.name}</Name>
      <Price>{currentPrice}</Price>

      {isOnSuperSale && <SuperSaleBadge />}

      <Description>{product.description}</Description>
      <VariantSwitch
        variants={product.variants}
        selectedVariantId={selectedVariantId}
        onVariantSelection={setSelectedVariantId}
      />
      <Button onClick={addToCart}>Add to cart</Button>
    </Container>
  );
};
```

## Last thoughts

I think you should now get the whole concept. Those rules seem very simple and obvious once you actually notice the problem. I hope my examples helped you to understand it.

![code](./assets/Separation_of_concerns_in_react_apps/code.jpeg)

Every developer can build a feature. Not every developer can build a feature in a way so it’s easy to understand and reuse by someone else.

Like I wrote in the beginning: React is very flexible and you can structure your code however you want. Yet, I can assure you that if you follow the practices introduced in this article, you’ll thank yourself later, when your project (and the team) grows.

I hope you find this article is helpful - in case you have any questions - feel free to drop me a line on [LinkedIn](https://www.linkedin.com/in/rafal-swietek/).
