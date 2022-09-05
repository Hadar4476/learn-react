// This component usage is for increasing performance by preventing unnecessary
// Rendering of elements, because React component can only return 1 root element.
// Which may lead to <div>s soup, meaning there are many div elements in the project
// Which doesn't have any specific role instead of wrapping elements, used as a 1 root element.

const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;
