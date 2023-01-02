import { ChevronLeftIcon, ChevronRightIcon } from 'assets/icons';
import clsx from 'clsx';
import * as React from 'react';

type CarouselProps = {
  className: string;
  components: React.ReactElement[];
};

export default function Carousel({ className, components }: CarouselProps) {
  const [elementIdx, setElementIdx] = React.useState(0);
  const elementsRef = React.useRef<HTMLDivElement[]>([]);
  const containerRef = React.useRef<HTMLDivElement>(null);

  function scrollToElement(i: number) {
    elementsRef.current[i]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function scrollContainerX(x: number) {
    containerRef.current?.scrollBy({
      left: x,
      behavior: 'smooth',
    });
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const currentBanner = entries.reduce((max, entry) =>
          entry.intersectionRatio > max.intersectionRatio ? entry : max,
        );

        if (currentBanner?.isIntersecting) {
          setElementIdx(
            Number(currentBanner.target.getAttribute('data-index')) || 0,
          );
        }
      },
      {
        root: containerRef.current,
        threshold: 0.5,
      },
    );

    elementsRef.current.forEach((b) => observer.observe(b));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={'relative' + ' ' + className}>
      {/* ========== ARROW CONTROLS ========== */}
      <button
        className='absolute z-10 top-1/2 left-2 -translate-y-1/2 w-8 h-8
        flex justify-center items-center bg-white bg-opacity-80 shadow rounded-full'
        aria-label='poprzedni element'
        onClick={() => scrollContainerX(-1)}
      >
        <ChevronLeftIcon className='h-5 fill-gray-900' />
      </button>
      <button
        className='absolute z-10 top-1/2 right-2 -translate-y-1/2 w-8 h-8
        flex justify-center items-center bg-white bg-opacity-80 shadow rounded-full'
        aria-label='następny element'
        onClick={() => scrollContainerX(1)}
      >
        <ChevronRightIcon className='h-5 fill-gray-900' />
      </button>
      {/* ========== BULLET INDICATORS ========== */}
      <div className='max-lg:hidden absolute z-10 bottom-2 left-1/2 -translate-x-1/2 flex gap-2'>
        <button
          aria-hidden
          onClick={() => scrollToElement(0)}
          className={clsx('h-2 w-2 rounded-full shadow', {
            'bg-white': elementIdx === 0,
            'bg-gray-400': elementIdx !== 0,
          })}
        />
        <button
          aria-hidden
          onClick={() => scrollToElement(1)}
          className={clsx('h-2 w-2 rounded-full shadow', {
            'bg-white': elementIdx === 1,
            'bg-gray-400': elementIdx !== 1,
          })}
        />
        <button
          aria-hidden
          onClick={() => scrollToElement(2)}
          className={clsx('h-2 w-2 rounded-full shadow', {
            'bg-white': elementIdx === 2,
            'bg-gray-400': elementIdx !== 2,
          })}
        />
      </div>
      {/* ========== BANNER CONTAINER ========== */}
      <div
        ref={containerRef}
        className='relative z-0 flex w-full h-full
        overflow-y-hidden overflow-x-auto
        snap-x snap-mandatory touch-manipulation scrollbar-hide'
      >
        {components.map((component, idx) => (
          <div
            key={component.key}
            data-index={idx}
            ref={(n) => n && (elementsRef.current[idx] = n)}
            className='relative h-full min-w-full snap-start snap-always'
          >
            {component}
          </div>
        ))}
      </div>
    </div>
  );
}
