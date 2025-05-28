'use client';

import { sampleSchemas, SampleService } from '@/shared/apis/sample';
import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Button } from '@radix-ui/themes';
import { SampleParam } from '@/shared/apis/sample/sample-types';

async function testAPI(id: string, params: SampleParam) {
  console.log('call testAPI with id:', id);
  return SampleService.getSampleDefault(id, params);
}

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField = memo(({ label, type, value, onChange }: InputFieldProps) => {
  console.log(`InputField render : ${label}`);
  return (
    <div>
      <label>{label}:</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
});
InputField.displayName = 'InputField';

export function TestPage() {
  const [id, setId] = useState('0');
  const [paramStr, setParamStr] = useState('default');
  const [paramNum, setParamNum] = useState(0);
  const [isDelay, setIsDelay] = useState(false);
  // const [isFetchEnabled, setIsFetchEnabled] = useState(false);

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ['repoData', id, paramStr, paramNum, isDelay],
    queryFn: () => testAPI(id, { isDelay, paramStr, paramNum }),
    select: (responseData) => {
      return sampleSchemas.SampleDtoSchema.parse(responseData.data);
    },
    enabled: false,
  });

  console.log('TestPage render~~~~~~~~~~~');
  console.log(`isPending: ${isPending}`);

  useEffect(() => {
    console.log('useEffect!!!');
    console.log(`isPending: ${isPending}`);
    refetch();
    // setIsFetchEnabled(true);
  }, []);

  const handleIdChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log('handleIdChange');
    setId(e.target.value);
  }, []);

  const handleParamStrChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      console.log('handleParamStrChange');
      setParamStr(e.target.value);
    },
    []
  );

  const onClickSuccess = () => {
    refetch();
  };

  const onClickError = () => {
    alert('실패');
  };

  // if (isPending) return 'Loading...............';
  if (error) return 'error!!!!!!!! : ' + error.message;

  return (
    <div>
      <InputField label="id" type="text" value={id} onChange={handleIdChange} />
      <InputField
        label="paramStr"
        type="text"
        value={paramStr}
        onChange={handleParamStrChange}
      />
      <input
        type="number"
        value={paramNum}
        onChange={(event) => {
          const value =
            event.target.value === '' ? 0 : parseInt(event.target.value);
          setParamNum(value);
        }}
        placeholder="param1-num"
      />
      <Checkbox.Root
        className="CheckboxRoot"
        checked={isDelay}
        onCheckedChange={(checked) => {
          const value =
            checked === 'indeterminate' || checked === false ? false : true;
          setIsDelay(value);
        }}
      >
        <Checkbox.Indicator className="CheckboxIndicator">✓</Checkbox.Indicator>
        <label className="Label" htmlFor="c1">
          delay
        </label>
      </Checkbox.Root>
      <h1>Test React Qury</h1>
      <div>{data?.colStr}</div>
      <div>{data?.colNum}</div>
      <div>{data?.colBool}</div>
      <div>
        <Button onClick={onClickSuccess}>테스트 성공</Button>
        <Button onClick={onClickError}>테스트 실패</Button>
      </div>
    </div>
  );
}
