export const ProjectsSkeleton = () => (
  <div className="container mx-auto text-center">
    <div className="animate-pulse">
      <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-48 mx-auto mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="bg-white dark:bg-gray-800 rounded-xl h-96 shadow-lg"
          />
        ))}
      </div>
    </div>
  </div>
);
