

function Image({ alt, src, width, height }) {
    return (
        <div>
            <a
                href="/"
                style={{ width: width, height: height, display: 'flex' }}
            >
                <img
                    alt={alt}
                    src={src}
                    style={{ width: "100%", height: "100%", borderRadius: '50%' }}
                ></img>
            </a>
        </div>);
}

export default Image;