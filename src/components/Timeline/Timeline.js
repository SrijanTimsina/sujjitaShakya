import styles from "./timeline.module.css";

const data = [
	{
		title: 2055,
		content:
			"ipsum dolor sit amet, quo ei simul congue exerci, ad nec ecto \
          mnesarchum, vim ea mazim fierent detracto.Ea quis ndis his, te \
          elitvoluptua dignissim per, habeo iusto primis ea eam.",
	},
	{
		title: 2018,
		content:
			"ipsum dolor sit amet, quo ei simul congue exerci, ad nec ecto \
          mnesarchum, vim ea mazim fierent detracto.Ea quis ndis his, te \
          elitvoluptua dignissim per, habeo iusto primis ea eam.",
	},
	{
		title: 2019,
		content:
			"ipsum dolor sit amet, quo ei simul congue exerci, ad nec ecto \
          mnesarchum, vim ea mazim fierent detracto.Ea quis ndis his, te \
          elitvoluptua dignissim per, habeo iusto primis ea eam.",
	},
	{
		title: 2020,
		content:
			"ipsum dolor sit amet, quo ei simul congue exerci, ad nec ecto \
          mnesarchum, vim ea mazim fierent detracto.Ea quis ndis his, te \
          elitvoluptua dignissim per, habeo iusto primis ea eam.",
	},
];

export default function TimeLine() {
	let direction = "";
	return (
		<>
			<div className={styles.timeline}>
				{data.map((bloc, index) => {
					direction = direction === "left" ? "right" : "left";
					return (
						<TimeLineBloc
							data={bloc}
							direction={direction}
							titleDirection={
								direction === "left" ? "titleRight" : "titleLeft"
							}
							key={index}
						/>
					);
				})}
			</div>
		</>
	);
}

function TimeLineBloc({ data, direction, titleDirection }) {
	return (
		<>
			<h2
				className={`${styles[titleDirection]} ${styles.timelineTitle}`}
			>
				{data.title}
			</h2>
			<div className={`${styles.container} ${styles[direction]}`}>
				<article className={styles.content}>
					<p className={styles.timelineText}>{data.content}</p>
				</article>
			</div>
		</>
	);
}
