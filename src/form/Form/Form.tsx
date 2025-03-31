import  { withTheme } from '@rjsf/core';
import Theme from '../Theme';

/**
 * A themed JSON Schema form
 *
 * The actual form/theme will be loaded asynchronously the first time it is used
 */
export default withTheme(Theme);
