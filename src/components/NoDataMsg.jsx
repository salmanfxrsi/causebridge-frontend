// eslint-disable-next-line react/prop-types
const NoDataMsg = ({ category }) => {
    return (
        <div className="py-24">
            <h1 className="text-3xl font-serif font-bold text-center">No {category} Found</h1>            
        </div>
    );
};

export default NoDataMsg;