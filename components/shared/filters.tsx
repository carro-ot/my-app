import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
	  <div className={className}>
		  <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
		  
		  <div className="flex flex-col gap-4">
				<FilterCheckbox text="Распродажа" value="1" />
				<FilterCheckbox text="Новинки" value="2"/>
		  </div>
		  
		  <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
			  <p className="font-bold mb-3">Цена от и до:</p>
			  <div className="flex gap-3 mb-5">
				<Input type="number" placeholder="0" min={0} max={3000} defaultValue={0} />
				<Input type="number" min="1000" max={30000} placeholder="3000" />
			  </div>
			  <RangeSlider min={0} max={30000} step={10} value={[0,30000]}/>
		  </div>

		  <CheckboxFiltersGroup
		  title="Цвет"
				className="mt-5"
				limit={6}
				defaultItems={[
					{
						text: 'Чёрный',
						value: '1',
					},
					{
						text: 'Белый',
						value: '2',
					},
					{
						text: 'Бежевый',
						value: '3',
					},
					{
						text: 'Красный',
						value: '4',
					},
					{
						text: 'Синий',
						value: '5',
					},
					{
						text: 'Зелёный',
						value: '6',
					},
{
						text: 'Желтый',
						value: '7',
					},
{
						text: 'Серый',
						value: '7',
					},
			  ]}
			  items={[
					{
						text: 'Чёрный',
						value: '1',
					},
					{
						text: 'Белый',
						value: '2',
					},
					{
						text: 'Бежевый',
						value: '3',
					},
					{
						text: 'Красный',
						value: '4',
					},
					{
						text: 'Синий',
						value: '5',
					},
					{
						text: 'Зелёный',
						value: '6',
					},
{
						text: 'Желтый',
						value: '7',
					},
{
						text: 'Серый',
						value: '7',
					},
			  ]}
		  />
	 </div>
  );
};