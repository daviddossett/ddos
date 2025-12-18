import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ICard {
  title: string;
  desc: string;
  to: string;
  image: StaticImageData;
}

const Card: React.FC<ICard> = React.memo(({ title, desc, to, image }) => {
  return (
    <Link href={to}>
      <div className='py-3 md:px-6 md:py-5 md:hover:bg-[#64646426] rounded-xl flex gap-4 items-center'>
        <Image src={image} alt='A picture of me!' width={60} height={60} />
        <div>
          <h2 className='leading-6'>{title}</h2>
          <p className='leading-8 text-neutral-400'>{desc}</p>
        </div>
      </div>
    </Link>
  );
});

Card.displayName = 'Card';

export default Card;
