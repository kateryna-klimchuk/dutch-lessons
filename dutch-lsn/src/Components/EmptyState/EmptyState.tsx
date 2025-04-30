import { EmptyStateIcon } from "../Icon/EmptyStateIcon";

export const EmptyState = () => {
  return (
    <div className="flex flex-col justify-center items-center my-auto">
      <EmptyStateIcon />
      {/* TODO: Implement styles */}
      <button>Add a new lesson</button>
    </div>
  );
};
