import { db } from "@/lib/prisma";

interface RestaurantPagesProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPages = async ({ params }: RestaurantPagesProps) => {
  const { slug } = await params;
  const restaurant = await db.restaurant.findUnique({ where: { slug } });
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2"></div>
    </div>
  );

  // server components - renderizados no servidor
  // podem ser async
  // podem chamar recursos do back-end (banco de dados)
  // não pode user hooks
  // não pode ter interatividade (para isso você tem que criar um client component)
};
export default RestaurantPages;
