export function CardSkeleton() {
    return (
        <div className='card sm:card-side bg-[#24385c] shadow-xl'>
            <figure className='skeleton h-64 md:h-auto md:w-1/3 '></figure>

            {/* Content */}
            <div className='card-body gap-4 p-3 xl:p-4'>
                {/* Full Name */}
                <div className='w-72 h-8 skeleton'></div>

                {/* Specialization */}
                <div className='w-72 h-8 skeleton'></div>

                {/* Footer */}
                <div className='card-actions skeleton w-52 h-8 justify-end'></div>
            </div>
        </div>
    );
}

export function CardsSkeleton() {
    return (
        <div className='px-2 md:px-0 grid sm:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 xl:gap-14'>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    );
}
