
export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full bg-n-2"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-2"></div>
    </>
  );
};


export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-orange-500 to-orange-600 backdrop-blur lg:hidden">
      <div className="absolute inset-0 opacity-[.03]">
      </div>

      <SideLines />

      
    </div>
  );
};
