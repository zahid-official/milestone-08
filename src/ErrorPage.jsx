import {Link} from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="bg-[#f3f3f3] w-1/2 h-[500px] rounded-3xl text-center flex justify-center items-center">
      <div className="space-y-5">
        <h2 className="text-7xl font-bold">Opps..</h2>
        <p className="text-xl ">
          We cant seem to find the page youre looking for.
        </p>
        <Link to="/"  className="btn text-base rounded-full bg-black text-white">  Go to HomePage</Link>
      </div>
    </div>
    </div>
  );
};

export default ErrorPage;
