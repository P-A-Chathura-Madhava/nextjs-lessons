import About from "../../components/About";
import Contact from "../../components/Contact";
import Service from "../../components/Service";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex flex-col container mx-auto mt-4">
            <div className="flex justify-center items-center">
            <h1 className="text-4xl font-bold">Dashboard Header</h1>
            </div>
            <div>{children}</div>
          <About />
          <Contact />
          <Service />
        </div>
    );
  }