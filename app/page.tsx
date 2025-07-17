import { Container, Filters, TopBar } from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { Title } from "@/components/shared/title";

export default function Home(){
	return (
		<>
			<Container className="mt-10">
				<Title text="Ассортимент" size="lg" className="font-extrabold" />
			</Container>
			<TopBar />
			
			<Container className="[ mt-10 pb-14]">
				<div className="flex gap-[60px]">

				<div className="w-{250px}">
						<Filters/>
					</div>

					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductCard
								id={0}
								name={"Adidas Originals Forum Bold"}
								price={2500}
								imageUrl={"https://i.pinimg.com/1200x/c3/c3/dc/c3c3dc8b551e244259b122108095f76d.jpg"} />
						</div>
					</div>
			</div>
			</Container>
		</>
	);
}