import axios from "axios";

interface PhysiciansProps {
  identifiantpp: string;
  name: string;
}

interface PhysicianListProps {
  input: string;
  url: string;
}

async function setPhysicianList(url: string): Promise<PhysiciansProps[]> {
  const response = await axios.get(url);
  const PhysicianArray: PhysiciansProps[] = [];
  const dataArray = [];
  dataArray.push(response.data);
  dataArray.map((data) => {
    const PhysicianObject: PhysiciansProps = {
      identifiantpp: data["identifiantpp"],
      name: data["prenomdexercice"],
    };
    PhysicianArray.push(PhysicianObject);
  });
  return PhysicianArray;
}
async function PhysicianList({ input, url }: PhysicianListProps) {
  const PhysicianArray = await setPhysicianList(url);
  const ValidArray = PhysicianArray.filter(
    (physician) =>
      physician.identifiantpp.includes(input) || physician.name.includes(input)
  );

  return (
    <div>
      {ValidArray.map((data) => (
        <h1>
          {data.identifiantpp} {data.name}
        </h1>
      ))}
    </div>
  );
}

export default PhysicianList;
