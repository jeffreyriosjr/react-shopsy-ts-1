
enum TypeColor {
    electronics = '#1b0e0e',
    jewelry = '#0000ff',
    mensClothing = '#9adb54',
    womensClothing = '#cff1f8',
}

export const setTypeColor = (type: string): string => {
    switch (type) {
        case 'electronics':
            return TypeColor.electronics;
            case 'jewelry':
                return TypeColor.jewelry;
                case "men's clothing":
                    return TypeColor.mensClothing;
                    case "women's clothing":
                        return TypeColor.womensClothing;
                        default:
                            return'#333';
    }
};