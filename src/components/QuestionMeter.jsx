function QuestionMeter() {

    const questionData = [
  { label: "Easy", count: 116, color: "#00ff9b", total: 904 },
  { label: "Medium", count: 187, color: "#ffcc5b", total: 1923 },
  { label: "Hard", count: 32, color: "#ff5b5b", total: 873 }
];

  return (
    <section className="p-6">
      <div className="flex flex-col gap-4 text-sm">
        {questionData.map((item, idx) => {
          const percent = (item.count / item.total) * 100;
          return (
            <div key={idx}>
              <div className="flex justify-between mb-1 text-sm">
                <span>{item.label}</span>
                <span>{item.count}/{item.total}</span>
              </div>
              <div
                className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div
                   style={{ width: `${percent}%`, background: item.color }}
                   className="h-4 transition-all duration-1000 ease-out">
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default QuestionMeter;
