function LeftMenu () {
    return (
        <div className="bg-gray-800 w-1/6 text-white h-screen flex flex-col">
            <nav className="mt-10">
                <span className="p-3 hover:bg-gray-900">
                    Dashboard
                </span>
                <span className="p-3 hover:bg-gray-900">
                    Users
                </span>
                <span className="p-3 hover:bg-gray-900">
                    Products
                </span>
            </nav>
        </div>
    );
}

export default LeftMenu;
