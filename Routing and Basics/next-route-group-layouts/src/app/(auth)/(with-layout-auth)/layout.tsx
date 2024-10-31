export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex justify-center items-center flex-col">
        <div className="bg-blue-300 w-full h-12 flex justify-center items-center"><h1 className="text-2xl font-bold">Auth Header</h1></div>
        {children}
        <div className="bg-slate-300 w-full h-12 flex justify-center items-center"><h1 className="text-2xl font-bold">Auth Footer</h1></div>
      </div>
  );
}
