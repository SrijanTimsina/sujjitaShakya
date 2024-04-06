import AboutImage from "@/assets/aboutImage.jpg";
import TimeLine from "@/components/Timeline/Timeline";

export default function AboutPage() {
	return (
		<div className="contentContainer pt-10">
			<div className={`aboutInfo `}>
				<p className="text-center text-3xl mb-6">
					About Sujita Shakya
				</p>
				<div
					className={`infoText flex gap-6 max-md:block flex-row-reverse`}
				>
					<img
						src={AboutImage.src}
						style={{
							height: "300px",
							marginBottom: "20px",
						}}
					></img>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Mauris imperdiet efficitur dapibus. Curabitur vel nisl sed
						enim vehicula pellentesque. Ut non finibus dui. Nulla ac
						ex ac magna sollicitudin tincidunt sit amet in dolor. Ut
						tempor, lectus id convallis pellentesque, augue turpis
						pretium risus, in sagittis diam est in velit. In orci
						risus, bibendum vel libero non, porttitor rhoncus nulla.
						Donec sollicitudin tortor eu sagittis convallis. Nulla in
						eros volutpat, scelerisque elit id, iaculis leo. Praesent
						eget egestas arcu. Vestibulum nec dapibus arcu, sit amet
						vulputate arcu. Vestibulum dignissim dignissim augue,
						vitae ultricies leo volutpat a. Sed non magna purus. Sed
						ultricies ipsum et augue commodo ullamcorper. Nulla
						placerat ligula et ipsum tincidunt, vitae tincidunt quam
						consectetur. Nam ligula felis, rhoncus non sem vel,
						hendrerit malesuada tellus. Aenean vulputate venenatis
						tortor, ac venenatis purus sodales at. Nulla efficitur
						hendrerit enim sit amet interdum. Etiam sollicitudin nulla
						sagittis, convallis libero ut, congue ex. Mauris interdum
						dolor a suscipit posuere. Vestibulum varius sem eget velit
						fringilla ultrices. Suspendisse mattis tempor aliquam.
						Morbi efficitur a dolor et accumsan. Ut magna urna,
						eleifend et dui a, iaculis tincidunt lorem. Quisque
						sagittis quam eu metus pellentesque fringilla. Sed cursus,
						neque in pellentesque dictum, sapien nisl iaculis ex, quis
						malesuada nisl mauris mollis elit. Pellentesque venenatis
						placerat quam eu dapibus. Duis at libero dui. Vestibulum
						sit amet sem nulla. Vivamus placerat ex ut sollicitudin
						volutpat. Suspendisse maximus dui non quam sollicitudin,
						vitae pulvinar neque ullamcorper. Class aptent taciti
						sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos. Curabitur sed nisl ante. Duis congue
						sagittis velit, eu convallis est viverra quis. Vestibulum
						ante ipsum primis in faucibus orci luctus et ultrices
						posuere cubilia curae; Nullam luctus lacinia ipsum et
						ornare. Pellentesque vestibulum laoreet ex, sit amet
						varius massa porta eu. Aliquam ut egestas mi. Aenean ut
						ultrices dolor. Donec sem eros, suscipit id massa et,
						posuere viverra augue. Sed ut augue tincidunt, aliquam
						massa in, congue tortor. Integer metus leo, interdum in
						maximus vel, tristique ac justo. Etiam purus lectus,
						tempus vitae est ac, ultricies eleifend risus. Proin
						malesuada id quam blandit commodo. Ut eleifend leo nec
						mattis pharetra. Duis sem nulla, venenatis sed lacus eget,
						fringilla hendrerit orci. Cras hendrerit at quam sit amet
						commodo. Phasellus quis luctus mauris, non tempor quam.
						Praesent et dignissim eros, vitae aliquet risus. Donec
						euismod consectetur arcu finibus vulputate. Praesent
						molestie tortor ante, tincidunt cursus lorem facilisis ut.
						In hac habitasse platea dictumst. Proin at gravida libero.
						Aliquam et posuere augue, ut pellentesque magna. Nunc
						condimentum ac lacus in mollis. Donec at laoreet lorem.
						Phasellus gravida volutpat risus, ac pharetra eros
						elementum sit amet. Pellentesque habitant morbi tristique
						senectus et netus et malesuada fames ac turpis egestas.
						Sed tincidunt aliquam massa, vitae auctor quam maximus eu.
						Orci varius natoque penatibus et magnis dis parturient
						montes, nascetur ridiculus mus.
					</p>
				</div>
			</div>
			<div className="mt-16 pb-1">
				<p className="text-center text-3xl">Political Time Line</p>
				<TimeLine />
			</div>
		</div>
	);
}
