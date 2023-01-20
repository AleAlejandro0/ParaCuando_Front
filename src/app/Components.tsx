//Import atoms
import ArrowAtoms from '../../components/ArrowAtom';
import BrandsAndStylesAtom from '../../components/BrandsAndStylesAtom';
import LikesAtom from '../../components/LikesAtom';
import NextButtonsAtom from '../../components/NextButtonsAtom';
import SearchAtom from '../../components/SearchAtom';

const Components = () => {
  return (
    <div>
      <h1>Atoms components</h1>

      <h2>Arrow</h2>
      <ArrowAtoms />
      <h2>Brands and Stores</h2>
      <BrandsAndStylesAtom />
      <h2>Likes bottons</h2>
      <LikesAtom />
      <h2>Next buttons</h2>
      <NextButtonsAtom />
      <h2>Search bar</h2>
      <SearchAtom />
    </div>
  );
};

export default Components;
