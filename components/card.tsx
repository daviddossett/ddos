import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface ICard {
  title: string;
  desc: string;
  to: string;
  image: StaticImageData;
}

function Card({ title, desc, to, image }: ICard): JSX.Element {
  return (
    <Link href={to}>
      <div className='py-3 md:px-6 md:py-5 md:hover:bg-theme-card-hover rounded-xl flex gap-4 items-center'>
        <Image src={image} alt='A picture of me!' width={60} height={60} />
        <div>
          <h2 className='leading-6'>{title}</h2>
          <p className='leading-8 text-theme-muted'>{desc}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
