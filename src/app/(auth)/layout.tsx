export default function Auth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
         {children}
    </main>
  );
}
