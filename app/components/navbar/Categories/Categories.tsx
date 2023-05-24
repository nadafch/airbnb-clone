"use client";

import Container from "../../Container";
import { TbBeach, TbDiamond, TbMountain, TbPool } from "react-icons/tb";
import {
  GiWindmill,
  GiIsland,
  GiBoatFishing,
  GiCastle,
  GiForestCamp,
  GiCaveEntrance,
  GiCactus,
  GiBarn,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import CategoriesBox from "./CategoriesBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property has villa",
  },
  {
    label: "Coutryside",
    icon: TbMountain,
    description: "This property in the countryside",
  },
  {
    label: "Pool",
    icon: TbPool,
    description: "This property has pool",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on island",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to a lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property is has skiing activities",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is in castle",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property is has camping activities",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property is in cave",
  },
  {
    label: "Dessert",
    icon: GiCactus,
    description: "This property is in dessert",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in Barn",
  },
  {
    label: "Lux",
    icon: TbDiamond,
    description: "This property is luxurious",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  const isMainPage = pathName === "/";

  if (!isMainPage) return null;
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoriesBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
