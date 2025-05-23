// Copyright 2023 Specter Ops, Inc.
//
// Licensed under the Apache License, Version 2.0
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0

import { Box, Link } from '@mui/material';
import { FC } from 'react';

const References: FC = () => {
    return (
        <Box sx={{ overflowX: 'auto' }}>
            <Link
                target='_blank'
                rel='noopener'
                href='https://www.specterops.io/assets/resources/an_ace_up_the_sleeve.pdf'>
                https://www.specterops.io/assets/resources/an_ace_up_the_sleeve.pdf
            </Link>
            <br />
            <Link target='_blank' rel='noopener' href='https://adsecurity.org/?p=3164'>
                https://adsecurity.org/?p=3164
            </Link>
            <br />
            <Link
                target='_blank'
                rel='noopener'
                href='https://learn.microsoft.com/en-us/powershell/module/laps/get-lapsadpassword'>
                https://learn.microsoft.com/en-us/powershell/module/laps/get-lapsadpassword
            </Link>
            <br />
            <Link
                target='_blank'
                rel='noopener'
                href='https://github.com/xpn/RandomTSScripts/tree/master/lapsv2decrypt'>
                https://github.com/xpn/RandomTSScripts/tree/master/lapsv2decrypt
            </Link>
            <br />
            <Link target='_blank' rel='noopener' href='https://github.com/CravateRouge/bloodyAD'>
                https://github.com/CravateRouge/bloodyAD
            </Link>
            <br />
        </Box>
    );
};

export default References;
