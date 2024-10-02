import brazilFlag from '/public/images/flags/icon-brazil.png';
import spainFlag from '/public/images/flags/icon-spain.png';
import usFlag from '/public/images/flags/icon-us.png';
import Image from 'next/image';
import { useState } from 'react';
import * as Select from '@radix-ui/react-select';

const LangSwitch = () => {
  const [selectedFlag, setSelectedFlag] = useState(usFlag);

  const handleSelectChange = (value:string) => {
    switch (value) {
      case 'pt-BR':
        setSelectedFlag(brazilFlag);
        break;
      case 'es-ES':
        setSelectedFlag(spainFlag);
        break;
      case 'en-US':
        setSelectedFlag(usFlag);
        break;
      default:
        setSelectedFlag(usFlag);
    }
  };

  const commonClassItem = 'p-2 flex justify-center items-center hover:rounded-lg hover:bg-gray-100 focus:outline-none'
  const commonClassTrigger = 'w-full h-10 flex justify-center items-center hover:rounded-lg hover:bg-gray-100 focus:outline-none';
  
  return (
    <div className="w-10 rounded">
      <Select.Root defaultValue="en-US" onValueChange={handleSelectChange}>
        <Select.Trigger className={commonClassTrigger}>
          <Image src={selectedFlag} alt="Brazil Flag" className="w-8 h-8"  />
        </Select.Trigger>
        <Select.Content className="w-full bg-gray shadow-lg rounded-lg">
          <Select.Group>
            <Select.Item value="pt-BR" className={commonClassItem}>
              <Image src={brazilFlag} alt="Brazil Flag" className="w-8 h-8"  />
            </Select.Item>
            <Select.Item value="es-ES" className={commonClassItem}>
              <Image src={spainFlag} alt="Spain Flag" className="w-8 h-8" />
            </Select.Item>
            <Select.Item value="en-US" className={commonClassItem}>
              <Image src={usFlag} alt="US Flag" className="w-8 h-8" />
            </Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </div>
  );
};

export default LangSwitch;
