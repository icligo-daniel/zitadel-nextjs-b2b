import { RadioGroup } from '@headlessui/react';
import { EyeIcon } from '@heroicons/react/outline';

import { Role, ROLES } from '../lib/roles';

export default function GrantRadio({ roles, selected, setSelected }: any) {
  function isAllowed(requestedRoles: string[]): boolean {
    const isAllowed = roles && requestedRoles && roles.some((role) => requestedRoles.includes(role));
    return isAllowed;
  }

  return (
    <div className="py-4">
      <div className="mx-auto max-w-7xl px-6">
        <RadioGroup className="grid grid-cols-2 gap-4" value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Project type</RadioGroup.Label>
          {ROLES.map((role: Role) => (
            <RadioGroup.Option
              key={role.name}
              value={role}
              disabled={!isAllowed(role.roles)}
              className={({ active, checked, disabled }) =>
                `${active ? 'ring-2 ring-zitadelaccent-500' : ''}
                ${checked ? 'bg-[#142C4B] border-zitadelaccent-500' : 'bg-[#1F2937] border-gray-700'}
                ${disabled ? 'bg-gray-800 opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-[#2D3748]'}
                  relative rounded-lg border p-4 flex flex-col`
              }
            >
              {({ checked }) => (
                <>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label as="p" className="font-medium text-white">
                          {role.name}
                        </RadioGroup.Label>
                        <RadioGroup.Description as="span" className="text-gray-400">
                          <span>{role.desc}</span>
                        </RadioGroup.Description>
                      </div>
                    </div>
                    {checked && (
                      <div className="flex-shrink-0">
                        <EyeIcon className="w-5 h-5 text-zitadelaccent-500" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
