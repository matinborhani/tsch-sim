import { append_to_file, writeToFile,write_next_line,find_line,append_end_time_data,append_start_time_data,write_ids } from "./file_operations.mjs";

async function main()
{    
    // await append_to_file('1;2;0.35;0.44')
    // await write_next_line()
    await write_ids(1,1)
    // const line_index = await find_line(1,1)
    // console.log(line_index)
    // await append_start_time_data(line_index,'0.4')
    // await append_end_time_data(line_index,'0.47')
  
}

main();