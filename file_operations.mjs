import {promises as fs} from 'fs';

export async function writeToFile(input, filename = 'output.txt') {
   
    try {
        await fs.writeFile(filename, 'SAAAAAAAAAAAAAAG');
        console.log('Successfully wrote to file');
    } catch (error) {
        console.error(`Error writing to file: ${error}`);
    }
}

export async function append_to_file(input, filename = 'output.txt') {
   
    try {
        await fs.appendFile(filename, input);
        console.log('Successfully wrote to file');
    } catch (error) {
        console.error(`Error writing to file: ${error}`);
    }
}

export async function write_next_line(filename = 'output.txt') {
   
    try {
        await fs.appendFile(filename, '\n');
        console.log('Successfully wrote to file');
    } catch (error) {
        console.error(`Error writing to file: ${error}`);
    }
}


export async function find_line(id_from, id_to, filename = 'output.txt') {
    try {
        const data = await fs.readFile(filename, 'utf-8');
        const lines = data.split('\n');

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const fields = line.split(';');

            if (fields[0] == id_from && fields[1] == id_to && !line.endsWith('\n')) {
                return i;
            }
        }

        return -1;
    } catch (error) {
        console.error(`Error reading file: ${error}`);
    }
}

export async function write_ids(id_from, id_to, filename = 'output.txt') {
    try {
        let data = await fs.readFile(filename, 'utf-8');

        // If the file does not end with a newline, add one
        if (!data.endsWith('\n')) {
            data += '\n';
        }
        data += `${id_from};${id_to};`
        
        await fs.writeFile(filename,data);
        console.log('Successfully appended ids to file');
    } catch (error) {
        console.error(`Error write ids: ${error}`);
    }
}

export async function append_start_time_data(lineIndex, sec_start, filename = 'output.txt') {
    try {
        const data = await fs.readFile(filename, 'utf-8');
        const lines = data.split('\n');

        if (lineIndex >= 0 && lineIndex < lines.length) {
            lines[lineIndex] += `${sec_start};`;
            await fs.writeFile(filename, lines.join('\n'));
            console.log('Successfully appended start time to file');
        } else {
            console.error('Invalid line index');
        }
    } catch (error) {
        console.error(`Error appending data to file: ${error}`);
    }
}

export async function append_end_time_data(lineIndex, sec_end, filename = 'output.txt') {
    try {
        const data = await fs.readFile(filename, 'utf-8');
        const lines = data.split('\n');

        if (lineIndex >= 0 && lineIndex < lines.length) {
            lines[lineIndex] += `${sec_end}`;
            write_next_line()
            await fs.writeFile(filename, lines.join('\n'));
            console.log('Successfully appended end time to file');
        } else {
            console.error('Invalid line index');
        }
    } catch (error) {
        console.error(`Error appending data to file: ${error}`);
    }
}


// writeToFile('sag')