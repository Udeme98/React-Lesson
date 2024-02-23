const NestComp = () => {
  const Heading = () => <h2>Nesting Components</h2>;
  const Text = () => (
    <p>You can actually nest several component in a single component.</p>
  );

  return (
    <div>
      <Heading />
      <Text />
    </div>
  );
};
export default NestComp;
