import ContentLoader from "react-content-loader";

const TableSkeleton = () => (
    <ContentLoader
        speed={2}
        width={600}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="42" y="21" rx="0" ry="0" width="126" height="20" />
        <rect x="170" y="21" rx="0" ry="0" width="126" height="20" />
        <rect x="300" y="21" rx="0" ry="0" width="126" height="20" />
        <rect x="42" y="49" rx="0" ry="0" width="126" height="20" />
        <rect x="170" y="49" rx="0" ry="0" width="126" height="20" />
        <rect x="300" y="49" rx="0" ry="0" width="126" height="20" />
        <rect x="42" y="73" rx="0" ry="0" width="126" height="20" />
        <rect x="170" y="73" rx="0" ry="0" width="126" height="20" />
        <rect x="300" y="73" rx="0" ry="0" width="126" height="20" />
        <rect x="42" y="96" rx="0" ry="0" width="126" height="20" />
        <rect x="170" y="96" rx="0" ry="0" width="126" height="20" />
        <rect x="300" y="96" rx="0" ry="0" width="126" height="20" />
        <rect x="42" y="120" rx="0" ry="0" width="126" height="20" />
        <rect x="170" y="120" rx="0" ry="0" width="126" height="20" />
        <rect x="300" y="120" rx="0" ry="0" width="126" height="20" />
    </ContentLoader>
);

export default TableSkeleton;