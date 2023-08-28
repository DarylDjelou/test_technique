import axios from "axios";

interface PhysiciansProps {
  identifiantpp: string;
  name: string;
}

async function setPhysicianList(url: string): PhysiciansProps[] {
  const response = await axios.get(url);
  const PhysicianArray: PhysiciansProps[] = [];
  const dataArray = [];
  dataArray.push(response.data);
  dataArray.map((data) => {
    const PhysicianObject: PhysiciansProps = {
      identifiantpp: data["identifiantpp"],
      name: data["prenomd'exercice"],
    };
    PhysicianArray.push(PhysicianObject);
  });
  return PhysicianArray;
}
const PhysicianList = () => {
  return <div>PhysicianList</div>;
};

export default PhysicianList;
