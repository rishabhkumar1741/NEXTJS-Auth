export default function userid({ params }: any) {
  return (
    <div>
      <h1>Profile </h1>
      <p> {params.id}</p>
    </div>
  );
}
