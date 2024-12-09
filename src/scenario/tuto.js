const Tuto = () => {
    return (
        <div className="w-full h-full flex center">
        <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/LT0hqF171-M`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="tuto"
      />
      </div>
    )
}
export default Tuto;