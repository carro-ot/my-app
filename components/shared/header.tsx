import { cn } from '@/lib/utils';
import React from 'react'
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';

interface Props  {
	ClassName?: string;
}

export const Header: React.FC<Props> = ({ ClassName }) => {
	return (
		<header className={cn('border border-b', ClassName)}>
				<Container className='flex items-center justify-between py-8'>
				<div className="flex items-center gap-4">
					<Image src="/logo.png" alt="Logo" width={35} height={35} className="object-contain" />
					<div>
						<h1 className="text-2xl uppercase font-black leading-tight mt-2">Carrot</h1>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<Button variant="outline" className="flex items-center gap-1">
					<User size = {16} />
						Login
					</Button>

					<div>
						<Button className="group relative"> 
							<b>1520 ₽</b>
							<span className="h-full w-[1px] bg-white/30 mx-3" />
							<div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
								<ShoppingCart size={16} className="relative" strokeWidth={2}></ShoppingCart>
								<b>3</b>
							</div>
							<ArrowRight size={20} className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover: translate-x-0"/>
						</Button>
				</div>
					</div>
				</Container>
		</header>
	);
};