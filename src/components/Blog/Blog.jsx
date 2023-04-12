import React from "react";

const Blog = () => {
  return (
    <div>
      <h3 className="text-center text-4xl my-12 font-bold">
        Welcome to Career Match Blog
      </h3>
      <div className="flex flex-col gap-8">
        <div className="bg-purple-600 text-white rounded">
          <h4 className="text-center bg-red-300 shadow-md mb-3 text-2xl font-bold py-2">
            When should you use Context API?
          </h4>
          <p className="p-5">
            Context API is used to passing data to child component from parent
            component. But it is different from props drilling. Props drilling
            is sending a data as props from parent to child component in chain.
            So it has some limitations and it is very hassle. This data sending
            in child component is no pain if you use context API. By using
            Context API you can send a data in any component from parent
            component to child component without chaining or drilling. It can
            send props individualy to any child component. So when props
            drilling is pain then you should use context API as an easy
            solution.
          </p>
        </div>
        <div className="bg-purple-600 text-white rounded">
          <h4 className="text-center bg-red-300 shadow-md mb-3 text-2xl font-bold py-2">
            What is Custom Hook?
          </h4>
          <p className="p-5">
            In react Hook is a common term we use. React provides different type
            of hooks to make the work of a developer easier. But sometime React
            provided hooks are not enough in special cases. In that usecase a
            developer can create a hook to reuse in different component. Custom
            hooks is a functional component which return some data like object,
            array, string etc performing some action inside.
          </p>
        </div>
        <div className="bg-purple-600 text-white rounded">
          <h4 className="text-center bg-red-300 shadow-md mb-3 text-2xl font-bold py-2">
            What is useRef()
          </h4>
          <p className="p-5">
            There are many hooks in React. 'useRef' is also a Hook. This hook is
            used to find a html document data directly and manipulate them
            directly. But using this hook can access to html document model by
            getting full control so html document model is no needed to control
            the element. It is not recomended to use generelly without some
            unique cases.
          </p>
        </div>
        <div className="bg-purple-600 text-white rounded">
          <h4 className="text-center bg-red-300 shadow-md mb-3 text-2xl font-bold py-2">
            What is useMemo ?
          </h4>
          <p className="p-5">
            useMemo is a react Hook. It is used to store some fucntionality to
            memory. Sometime we can run a long calculation using loop or loop
            like function. But when we execute the calculation the browser
            process will be very slow to perform the calculation every time. We
            can avoid this by using useMemo hook. We can use useMemo hook to
            save the calculation process in memory so that it will take some
            time initially but once it is done, then second time it will be
            fast.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
