function chocolateBar(width, heigth) {
    if (width === 0 || heigth === 0) {
        return -1;
    }
    return (width * heigth) - 1;
}
