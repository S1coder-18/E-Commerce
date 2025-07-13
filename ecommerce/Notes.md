How we create the context provider

1. React Context API
React Context is used to pass data globally in the component tree, without prop drilling.

ShopContext.Provider --> is the context provider, and any component inside it can access the value via useContext.

2. ShoContextProvider Component
Acts as a wrapper that can be placed around our app (or part of it).

It provides the value { all_product } to anything inside it.

3. props.children
Represents any JSX elements nested inside <ShoContextProvider>...</ShoContextProvider>.
They will have access to the provided context.

For example --> 
<ShoContextProvider>
  <MyComponent />
  <AnotherComponent />
</ShoContextProvider>

Every component wrapped inside it, Paased as children.
In our case, <App/> is a children and every component inside our component are also the children of it.
And every component, Inside App also have the access of context provided by the <ShopContextProvider/>



1. Import createContext from react.
2. export that context file.
3. Initially we null as the initial value. 
4. Then we have create one wrapper component or function to provide the context.
5. And we wrap using
  <ShopContext.Provider value={pass the value in it ... whatever we want to provide acees globally} /> 
6. exported that wrapper component
7. And then inside main we will wrap or whole <App/> component inside that <ShopContextProvider />
  or to other component to whom we wanna provide context.