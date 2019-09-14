- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components are quite common so learning to use class components will be beneficial for our careers.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount: this tells react if the component it's called from has mounted successfully to the React dom.

componentDidUpdate: this tells react that the state within the component updated, allowing us to run functions based on if the state updates or not.

componentWillUnmount: calls right before a component is unmounted and destroyed, allows us to perform cleanup from possible side effects or stopping axios calls.

- [ ] What is the purpose of a custom hook?

Custom hooks allow us to extend stateful logic beyond just one component. If we have multiple axios calls throughout components it would be easier to put it in one custom hook and pass the hook into all components.

- [ ] Why is it important to test our apps?

Testing is expensive, if we can test ourselves, why not? Testing our code allows us to trust our own code and makes us write better code.