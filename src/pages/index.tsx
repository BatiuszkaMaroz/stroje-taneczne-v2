import Seo from 'components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

export default function IndexPage() {
  return (
    <>
      <section className='bg-slate-300 h-[90vh] max-md:h-[50vh]'>
        <div className='h-full relative z-10'>
          <StaticImage
            src='../assets/images/carousel-1.jpeg'
            alt='para taneczna'
            className='h-full absolute -z-10'
            imgClassName='object-center max-md:object-right'
          />
          <div className='container mx-auto pt-[10vh]'>
            {/* <h1 className='text-3xl uppercase tracking-[2rem] leading-[240%]'>
              Szyte na miarę <br />
              stroje do <br />
              tańca <br />
              towarzyskiego
            </h1> */}
          </div>
        </div>
      </section>

      <section className='bg-slate-300 h-[90vh] max-md:h-[50vh]'>
        <div className='h-full relative z-10'>
          <StaticImage
            src='../assets/images/carousel-1.jpeg'
            alt='para taneczna'
            className='h-full absolute -z-10'
            imgClassName='object-center max-md:object-right'
          />
          <div className='container mx-auto pt-[10vh]'>
            {/* <h1 className='text-3xl uppercase tracking-[2rem] leading-[240%]'>
              Szyte na miarę <br />
              stroje do <br />
              tańca <br />
              towarzyskiego
            </h1> */}
          </div>
        </div>
      </section>

      <section className='bg-slate-300 h-[90vh] max-md:h-[50vh]'>
        <div className='h-full relative z-10'>
          <StaticImage
            src='../assets/images/carousel-1.jpeg'
            alt='para taneczna'
            className='h-full absolute -z-10'
            imgClassName='object-center max-md:object-right'
          />
          <div className='container mx-auto pt-[10vh]'>
            {/* <h1 className='text-3xl uppercase tracking-[2rem] leading-[240%]'>
              Szyte na miarę <br />
              stroje do <br />
              tańca <br />
              towarzyskiego
            </h1> */}
          </div>
        </div>
      </section>

      <section className='bg-slate-300 h-[90vh] max-md:h-[50vh]'>
        <div className='h-full relative z-10'>
          <StaticImage
            src='../assets/images/carousel-1.jpeg'
            alt='para taneczna'
            className='h-full absolute -z-10'
            imgClassName='object-center max-md:object-right'
          />
          <div className='container mx-auto pt-[10vh]'>
            {/* <h1 className='text-3xl uppercase tracking-[2rem] leading-[240%]'>
              Szyte na miarę <br />
              stroje do <br />
              tańca <br />
              towarzyskiego
            </h1> */}
          </div>
        </div>
      </section>

      <section className='bg-slate-300 h-[90vh] max-md:h-[50vh]'>
        <div className='h-full relative z-10'>
          <StaticImage
            src='../assets/images/carousel-1.jpeg'
            alt='para taneczna'
            className='h-full absolute -z-10'
            imgClassName='object-center max-md:object-right'
          />
          <div className='container mx-auto pt-[10vh]'>
            {/* <h1 className='text-3xl uppercase tracking-[2rem] leading-[240%]'>
              Szyte na miarę <br />
              stroje do <br />
              tańca <br />
              towarzyskiego
            </h1> */}
          </div>
        </div>
      </section>
    </>
  );
}

export const Head = () => <Seo />;
