import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";

function Home() {
  const navigate = useNavigate();

  const { user } = useAuth0();

  async function searchCity(query) {
    const apiKey = "642dd7c4a2ffc1209defa3d44fa43592"; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`;

    const redirect = (d) => {
      navigate("/weather", { state: d });
    };

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      console.log(user);

      redirect(data);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  const onSubmit = (data) => {
    searchCity(data);
  };

  return (
    <>
      <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <h4 className="mt-4 font-bold tracking-tight text-gray-900 sm:text-xl">
            {user.name}
          </h4>
          <h4 className="mt-4 font-bold tracking-tight text-gray-900 sm:text-lg">
            https://github.com/{user.nickname}
          </h4>

          <div className="mt-10 items-center justify-center gap-x-6 block">
            <SearchBox className="p-5" onSubmit={(data) => onSubmit(data)} />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
