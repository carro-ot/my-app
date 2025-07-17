import { Container, Filters, TopBar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/title";

export default function Home(){
	return (
		<>
			<Container className="mt-10">
				<Title text="Ассортимент" size="lg" className="font-extrabold" />
			</Container>
			<TopBar />
			
			<Container className="[ mt-10 pb-14]">
				<div className="flex gap-[80px]">

				<div className="w-{250px}">
						<Filters/>
					</div>

					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList title={"Новинки"} items={[{
								id: 1,
								name: 'Cargo Loose Pink',
								imageUrl: 
									'https://i.pinimg.com/736x/20/38/55/203855cf14d5160e7cf6dcbb873252b6.jpg',
								price: 3550,
								items: [{price: 3550}],
							},
						]} categoryId={1}/>
						</div>
					</div>
			</div>
			</Container>
		</>
	);
}