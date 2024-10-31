const getRanodmNumber = (count: number) => {
    return Math.floor(Math.random() * count);
}

export default function ProductLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const random = getRanodmNumber(2);

    if (random ===1) {
        throw new Error("Error loading Product Layout");
    }

    return (
        <div className="flex flex-col container mx-auto mt-4 justify-center items-center">
            <div><h1 className="text-4xl font-bold">Product Layout</h1></div>
          {children}
        </div>
    );
  }