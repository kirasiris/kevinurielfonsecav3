const useProgress = ({ percentage }) => {
	return (
		<div className={`progress mb-2`}>
			<div
				className={`progress-bar progress-bar-striped bg-success`}
				role={`progressbar`}
				style={{ width: `${percentage}%` }}
			>
				{percentage}%
			</div>
		</div>
	);
};

export default useProgress;
