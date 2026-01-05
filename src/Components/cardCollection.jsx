import Card from "./card";


export default function CardCollection() {
  return (
    <div className="grid md:grid-cols-5 grid-cols-2 w-full gap-5 ">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
  )
}
