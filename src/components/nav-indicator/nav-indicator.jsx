export const NavIndicator = (index, isActive) =>
  isActive ? (
    <span className="size-[31px] border-3 rounded-full bg-gris border-amarillo" />
  ) : (
    <span className="size-[31px] border-3 rounded-full bg-amarillo border-amarillo" />
  );
