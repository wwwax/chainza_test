const Token: React.FC = () => {
    return (
        <div className="token">
            <input className="token__input" type="number" placeholder="0" />
            <select className="token__select">
                <option value="green">centimeter</option>
                <option value="blue">decimeter</option>
                <option value="red">meter</option>
            </select>
        </div>
    );
};

export default Token;
