import { searchForThings } from "./actions";

export default async function PragmadicHome() {
  const data = await searchForThings();
  return (
    <>
      <div>
        {
          data &&
            data.map((item) => (
              <div key={item.id}>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
              </div>
            )) // Add closing parenthesis here
        }
      </div>
      ;
    </>
  );
}
